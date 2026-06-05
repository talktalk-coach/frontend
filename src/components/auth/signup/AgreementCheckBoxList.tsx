import {AgreementCheckbox} from '@/components/auth/signup/AgreementCheckBox';

interface AgreementCheckBoxListProps {
  isPrivacyChecked: boolean;
  setIsPrivacyChecked: (checked: boolean) => void;

  isVoiceChecked: boolean;
  setIsVoiceChecked: (checked: boolean) => void;
}

export const AgreementCheckBoxList = ({
  isPrivacyChecked,
  setIsPrivacyChecked,
  isVoiceChecked,
  setIsVoiceChecked,
}: AgreementCheckBoxListProps) => {
  return (
    <div className='ml-2 flex flex-col gap-2.5'>
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
