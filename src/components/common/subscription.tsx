import Text from '@components/ui/text';
import Input from '@components/ui/input';
import Button from '@components/ui/button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import TextRed from '@components/ui/text-red';

const data = {
  title: 'common:text-subscribe-heading',
  description: 'common:text-subscribe-description',
  buttonText: 'common:button-subscribe',
};

interface Props {
  className?: string;
  disableBorderRadius?: boolean;
}

type FormValues = {
  subscription_email: string;
};

const defaultValues = {
  subscription_email: '',
};

const Subscription: React.FC<Props> = ({ className = 'px-5 sm:px-8 md:px-16 2xl:px-24', disableBorderRadius = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });
  const { t } = useTranslation();
  const { title, description, buttonText } = data;
  async function onSubmit(input: FormValues) {
    console.log(input, 'data');
  }
  return (
    <div
      className={`${className} flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16`}
    >
      <div className="lg:-mt-2 xl:-mt-0.5 text-left font-oswald text-2xl  xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0">
        <TextRed
          variant="mediumHeading"
          // className='mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5'
          className="sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5 text-giRed"
        >
          {t(`${title}`)}
        </TextRed>
        <p className="text-xs md:text-sm leading-6 md:leading-7 font-body text-gititle pt-2">{t(`${description}`)}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-shrink-0 w-full sm:w-96 md:w-[545px]" noValidate>
        <div className=" relative mb-6 flex flex-col sm:flex-row items-start justify-end">
        <div className="relative mb-6">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="text" id="input-group-1" className="bg-white border border-b-gray-300  block  pl-10 py-2.5 " placeholder="name@flowbite.com"/>
</div>
          <Button disableBorderRadius={disableBorderRadius} className="mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0">
            <span className="lg:py-0.5 text-lg">{t(`${buttonText}`)}</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
