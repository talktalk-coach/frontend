declare module 'audiobuffer-to-wav' {
  /**
   * AudioBuffer를 WAV 포맷의 ArrayBuffer로 변환한다.
   * @param buffer 변환할 AudioBuffer
   * @param options float 옵션 등 (생략 가능)
   */
  export default function audioBufferToWav(
    buffer: AudioBuffer,
    options?: {float32?: boolean}
  ): ArrayBuffer;
}
