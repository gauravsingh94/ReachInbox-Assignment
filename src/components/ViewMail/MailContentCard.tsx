const MailContentCard = () => {
  return (
    <div className="h-60  w-full py-[6px] px-6 rounded-md border-[1px] border-borderColorLight dark:border-borderColorDark bg-white dark:bg-[#141517] text-[12px] text-black dark:text-white flex flex-col justify-center">
      <div className="flex justify-between">
        <p className="text-[14px] font-semibold">New Product Launch</p>
        <p className="text-[14px] text-[#7F7F7F]">20 june 2022 : 9:16AM</p>
      </div>
      <p className="text-[#AEAEAE] text-[14px] mt-2">
        from : jeanne@icloud.com cc : lennon.j@mail.com
      </p>
      <p className="text-[#AEAEAE] text-[14px] mt-2">to : lennon.j@mail.com</p>
      <p className="mt-3 w-[500px] text-[14px]">
        I would like to introduce you to SaaSgrow, a productized design service
        specifically tailored for saas startups. Our aim is to help you enhance
        the user experience and boost the visual appeal of your software
        products.
      </p>
    </div>
  );
};
export default MailContentCard;
