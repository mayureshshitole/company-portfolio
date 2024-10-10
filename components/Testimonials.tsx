import React from "react";
import AnimatedShinyText from "./ui/animated-shiny-text";

const Testimonials = () => {
  return (
    <div id="aboutus" className="relative flex flex-col  items-center justify-between mx-auto md:max-w-4xl lg:max-w-6xl">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 flex flex-col justify-center items-center ">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-3xl font-bold text-center mb-6">About Us</span>
          </AnimatedShinyText>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At <strong>Ambicube</strong>, we are dedicated to transforming ideas
            into reality through our innovative digital solutions. With a focus
            on exceptional service and unwavering support, we pride ourselves on
            being more than just a service provider; we are your partners in
            growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our team of experts brings a wealth of experience in{" "}
            <strong>web design and development</strong>,{" "}
            <strong>mobile app creation</strong>, and{" "}
            <strong>cloud solutions</strong>. We utilize the latest technologies
            and industry trends to craft scalable, dynamic, and secure websites
            that cater to your unique needs. Whether you are looking to enhance
            your online presence with effective{" "}
            <strong>social media marketing</strong> or seeking insights through{" "}
            <strong>data analytics</strong>, we have the expertise to help you
            thrive in this competitive landscape.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            What sets us apart is our commitment to{" "}
            <strong>fast delivery</strong> and{" "}
            <strong>affordable pricing</strong> without compromising on quality.
            We understand the importance of timely solutions and are dedicated
            to ensuring that your project is completed efficiently. Our{" "}
            <strong>24/7 support</strong> ensures that we are always here to
            assist you, whether it is a simple query or a complex issue.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At <strong>AmbiCube</strong>, we also emphasize the value
            of collaboration. Through <strong>real-time editing</strong> and{" "}
            <strong>version control</strong>, we streamline your workflow,
            making it easier for teams to work together seamlessly. We believe
            in a proactive approach, allowing you to focus on your core business
            while we handle the technicalities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Join us on this journey as we <strong>discuss strategies</strong>,{" "}
            <strong>develop solutions</strong>, and <strong>deploy</strong>{" "}
            projects that help your business <strong>grow</strong>. With our{" "}
            <strong>ongoing maintenance</strong> and support services, you can
            rest assured that we will be with you every step of the way,
            committed to your success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center mt-6">
            Together, lets build something extraordinary.
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className=" w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fcd34d"
                className="inline-block w-8 h-8 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Welcome to Ambicube, where exceptional service meets unwavering
                support. We understand that every client is unique, which is why
                we take the time to listen and tailor our services to meet your
                specific needs. Our passionate team is always on standby, ready
                to assist you with a smile and a proactive approach. We are not
                just your service provider; we are your partners in growth. With
                us by your side, knowing that we are here to ensure your
                success. Lets embark on this journey together!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Harshil Shah
              </h2>
              <p className="text-gray-500">Co-Founder, CEO</p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className=" w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fcd34d"
                className="inline-block w-8 h-8 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                At Ambicube, we believe that great service is the cornerstone of
                success. Our dedicated team is committed to putting your needs
                first, ensuring that every interaction is seamless and
                supportive. We dont just provide solutions; we build
                relationships based on trust and transparency. Whether you are
                launching a new project or need ongoing support, we are here to
                empower you every step of the way. Together, lets transform your
                vision into reality and achieve your goals with unwavering
                dedication and care.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Mayuresh Shitole
              </h2>
              <p className="text-gray-500">Co-Founder, CTO</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
