/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

const Services = () => {
    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={'/public/Team.gif'}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold">Explore Us</h3>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    At EntoMedu, we are dedicated to providing a wide range of entertainment and media services that cater to your every need. Our team of experts is passionate about delivering top-notch content and experiences that will captivate your audience and leave a lasting impression. Whether you're a seasoned professional or just starting your journey in the entertainment and media world, we have the perfect services for you.
    </p>
  </div>
</div>
    );
};

export default Services;