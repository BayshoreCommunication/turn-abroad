import Image from 'next/image';
import Link from 'next/link';

const Max_Paragraph_Length = 100; // Define the maximum length for the paragraph

const ServiceCard = ({ serviceCard }) => {
  const { paragraph, read_more_link } = serviceCard;

  // Function to check if the paragraph length exceeds the maximum
  const shouldShowReadMore = paragraph.length > Max_Paragraph_Length;

  return (
    <div className="w-full">
      <Image
        src={serviceCard?.icon.src}
        alt="Career Counseling"
        width={serviceCard?.icon.width}
        height={serviceCard?.icon.height}
      />
      <h2 className="text-2xl font-bold text-secondary mt-6 mb-4">
        {serviceCard?.title}
      </h2>
      <p className="text-[#6E767E]">
       
        {paragraph ? paragraph  : ""}
       
      
      </p>
      {/* <p className="text-[#6E767E]">
       
        {shouldShowReadMore ? `${paragraph.slice(0, Max_Paragraph_Length)}...` : paragraph}
     
        {shouldShowReadMore && (
          <Link
            href={read_more_link}
            className="text-[#25313E] font-bold duration-500 hover:text-primary"
          >
            Read More
          </Link>
        )}
      </p> */}
    </div>
  );
};

export default ServiceCard;
