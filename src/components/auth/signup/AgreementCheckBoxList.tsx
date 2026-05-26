import {AgreementCheckbox} from '@/components/auth/signup/AgreementCheckBox';

interface AgreementCheckBoxListProps {
  isUnder14: boolean;
  setIsUnder14: (checked: boolean) => void;

  isPrivacyChecked: boolean;
  setIsPrivacyChecked: (checked: boolean) => void;

  isVoiceChecked: boolean;
  setIsVoiceChecked: (checked: boolean) => void;
}

export const AgreementCheckBoxList = ({
  isUnder14,
  setIsUnder14,
  isPrivacyChecked,
  setIsPrivacyChecked,
  isVoiceChecked,
  setIsVoiceChecked,
}: AgreementCheckBoxListProps) => {
  return (
    <div className='ml-2 flex flex-col gap-2.5'>
      <AgreementCheckbox
        label='만 14세 미만인가요?'
        checked={isUnder14}
        onChange={setIsUnder14}
      />
      <AgreementCheckbox
        label='개인정보 활용 동의'
        checked={isPrivacyChecked}
        onChange={setIsPrivacyChecked}
        required
      />
      <AgreementCheckbox
        label='개인정보(목소리) AI 저작권 동의'
        checked={isVoiceChecked}
        onChange={setIsVoiceChecked}
        required
      />
    </div>
  );
};
