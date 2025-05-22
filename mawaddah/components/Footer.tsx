const footerInfo: Array<{ key: string; value: string }> = [
  {
    key: 'Contact Us',
    value: '011-123456789',
  },
  {
    key: 'Github',
    value: 'ammarsaf',
  },
];

export const Footer = () => {
  return (
    <>
      <div
        className="flex justify-around gap-10 border-1 
      rounded-md p-2 leading-7 [&:not(:first-child)]:mt-6 font-medium 
      mx-10 mb-10 bg-purple-100"
      >
        {footerInfo.map((info, index) => (
          <div>
            <div key={index}>{info.key}</div>
            <div>{info.value}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
