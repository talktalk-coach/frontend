'use client';

import {useRef, useState} from 'react';
import audioBufferToWav from 'audiobuffer-to-wav';

/**
 * useRecord 커스텀 훅은 브라우저에서 오디오 녹음을 시작하고, 녹음이 완료되면 오디오 Blob을 반환합니다.
 * @function useRecord
 * @returns {Object} 녹음 상태와 관련된 함수 및 데이터를 포함하는 객체.
 * @property {boolean} isRecording - 현재 녹음 중인지 여부를 나타냅니다. 녹음 중이면 true, 그렇지 않으면 false입니다.
 * @property {() => Promise<void>} startRecording - 녹음을 시작하는 비동기 함수입니다.
 *   사용자가 마이크 접근 권한을 허용해야 하며, 이 함수 호출 시 MediaRecorder가 초기화되고 녹음이 시작됩니다.
 * @property {() => Promise<Blob>} stopRecording - 녹음을 중지하고 수집된 오디오 청크를
 *   합쳐 Blob으로 반환하는 함수입니다. recording/paused 상태 모두 정상 종료됩니다.
 * @property {string} audio - 녹음이 종료된 후 생성된 오디오 파일의 Blob URL입니다.
 *   이 URL은 `<audio>` 태그의 src 속성 등에서 사용하여 녹음된 오디오를 재생할 수 있습니다.
 */

export function useRecord(): {
  isRecording: boolean;
  startRecording: () => Promise<void>;
  pauseRecording: () => void;
  resumeRecording: () => void;
  stopRecording: () => Promise<Blob>;
  audio: string;
} {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audio, setAudio] = useState<string>('');
  const mediaRecorderRef = useRef<MediaRecorder>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingPromiseRef = useRef<(value: Blob) => void>(() => {});
  const recordingRejectRef = useRef<(reason: Error) => void>(() => {});
  const streamRef = useRef<MediaStream>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: false,
        },
      });
      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        try {
          const recordedBlob = new Blob(audioChunksRef.current);
          const arrayBuffer = await recordedBlob.arrayBuffer();
          const audioContext = new AudioContext();
          const decoded = await audioContext.decodeAudioData(arrayBuffer);
          await audioContext.close();

          const targetRate = 16000;
          const offline = new OfflineAudioContext(
            1, // 모노
            Math.ceil(decoded.duration * targetRate),
            targetRate
          );
          const source = offline.createBufferSource();
          source.buffer = decoded;
          source.connect(offline.destination);
          source.start();
          const rendered = await offline.startRendering();

          const wavArrayBuffer = audioBufferToWav(rendered);
          const wavBlob = new Blob([wavArrayBuffer], {type: 'audio/wav'});

          const audioUrl = URL.createObjectURL(wavBlob);
          setAudio(audioUrl);
          recordingPromiseRef.current?.(wavBlob);
        } catch (e) {
          recordingRejectRef.current?.(
            e instanceof Error ? e : new Error('WAV 변환에 실패했습니다')
          );
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error('알 수 없는 에러 발생');
      }
    }
  };

  /* MediaRecorder의 pause 메서드를 활용해 녹음 중인 경우에만 일시정지한다. */
  const pauseRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  /* MediaRecorder의 resume 메서드를 활용해 일시정지 상태인 경우에만 녹음을 재개한다. */
  const resumeRecording = () => {
    if (mediaRecorderRef.current?.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const stopRecording = (): Promise<Blob> => {
    return new Promise<Blob>((resolve, reject) => {
      recordingPromiseRef.current = resolve;
      recordingRejectRef.current = reject;

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }

      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    });
  };

  return {
    isRecording,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    audio,
  };
}
