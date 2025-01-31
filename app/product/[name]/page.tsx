export default async function Products({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  interface Product {
    name: string;
    label: string;
    description: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
  }

  const products: Product[] = [
    {
      name: "daikin",
      label: "Daikin",
      description:
        "Daikin offers cutting-edge air conditioning systems known for their energy efficiency and innovative features. With a wide range of models suitable for both residential and commercial spaces, Daikin provides reliable cooling solutions designed for comfort and performance.",
      description1:
        "The company specializes in creating energy-efficient units that reduce electricity consumption without compromising on performance. Daikin's advanced air filtration technology ensures clean and healthy indoor air quality, making it ideal for individuals with allergies or respiratory concerns.",
      description2:
        "Whether you need a compact unit for a small room or a large system for a commercial building, Daikin offers a diverse selection that can be tailored to meet your specific cooling needs. Their products are also known for durability, ensuring long-lasting performance year after year.",
      description3:
        "Daikin offers both residential and commercial AC units with customizable features.",
      description4:
        "Units come with smart technology for enhanced energy management and convenience.",
      description5:
        "Daikin products are backed by excellent customer service and support.",
    },
    {
      name: "lloyd",
      label: "Lloyd",
      description:
        "Lloyd air conditioners provide exceptional value for money, offering a blend of affordability, performance, and reliability. Their products cater to various needs, from personal cooling solutions to large-scale installations.",
      description1:
        "Designed to deliver efficient cooling in even the hottest climates, Lloyd AC units come with advanced technology that improves energy efficiency and ensures consistent performance.",
      description2:
        "With features like inverter technology, these systems help save on electricity bills while providing comfortable indoor temperatures.",
      description3:
        "Lloyd units come with user-friendly controls and extended warranty options.",
      description4:
        "The company's ACs are designed for easy maintenance and durability.",
      description5:
        "Lloyd is known for offering budget-friendly solutions with long-term reliability.",
    },
    {
      name: "mitsubishi",
      label: "Mitsubishi",
      description:
        "Mitsubishi is a well-respected name in the air conditioning industry, known for providing high-quality products that focus on energy savings and environmental sustainability. Their range of AC units are built to meet the demands of both residential and commercial users.",
      description1:
        "Mitsubishi's air conditioning systems are designed with inverter technology, which adjusts the compressor's speed to maintain a consistent temperature while consuming less energy.",
      description2:
        "This feature makes Mitsubishi AC units ideal for areas with fluctuating temperatures, as they provide constant comfort without excessive power consumption.",
      description3:
        "Mitsubishi's units are highly regarded for their quiet operation and robust build quality.",
      description4:
        "They offer a variety of models to suit different room sizes and user needs.",
      description5:
        "Mitsubishi systems are durable and built to last for years of reliable performance.",
    },
    {
      name: "blue-star",
      label: "Blue Star",
      description:
        "Blue Star is one of India's leading manufacturers of air conditioning systems, offering an extensive range of solutions for both homes and businesses. Known for their robust performance and energy-efficient technologies, Blue Star AC units are designed to offer reliable cooling even in the hottest of climates.",
      description1:
        "With a focus on innovation, Blue Star’s air conditioners come with advanced features such as energy-saving inverter technology, air purifiers, and anti-bacterial filters.",
      description2:
        "These systems are perfect for individuals looking for both comfort and air quality, as well as durable long-term performance.",
      description3:
        "Blue Star’s service network is vast, ensuring timely maintenance and repairs.",
      description4:
        "The company is known for producing highly energy-efficient products with a focus on sustainability.",
      description5:
        "Blue Star ACs are engineered for longevity and ease of use, making them a trusted choice.",
    },
    {
      name: "hitachi",
      label: "Hitachi",
      description:
        "Hitachi air conditioners are known for their superior performance, energy efficiency, and cutting-edge technology. With a variety of models to choose from, Hitachi offers reliable solutions for both residential and commercial cooling needs.",
      description1:
        "Their air conditioners come with advanced inverter technology, allowing them to adjust the cooling capacity based on real-time room temperature.",
      description2:
        "This not only improves comfort but also reduces energy consumption, making them an eco-friendly option.",
      description3:
        "Hitachi’s products are designed to operate quietly, making them suitable for both homes and workplaces.",
      description4:
        "The systems are known for their durable construction, ensuring long-lasting performance.",
      description5:
        "Hitachi is a trusted brand in the air conditioning market for reliable and sustainable solutions.",
    },
    {
      name: "lg",
      label: "LG",
      description:
        "LG is a global leader in air conditioning technology, known for delivering high-performance cooling systems that are both energy-efficient and reliable. Their AC units are equipped with innovative features like smart technology integration and advanced air purification systems.",
      description1:
        "LG’s inverter air conditioners are designed to adjust cooling power according to the room's temperature, reducing energy usage and providing a more consistent and comfortable environment.",
      description2:
        "These systems are perfect for anyone looking to lower energy bills without sacrificing performance.",
      description3:
        "With sleek designs and user-friendly controls, LG air conditioners are both functional and aesthetically pleasing.",
      description4:
        "LG’s commitment to quality and customer satisfaction makes them a top choice for households and businesses alike.",
      description5:
        "Their air conditioners also feature advanced air purification to improve indoor air quality.",
    },
    {
      name: "panasonic",
      label: "Panasonic",
      description:
        "Panasonic offers a range of premium air conditioners designed to provide superior cooling performance while maintaining high energy efficiency. Known for their cutting-edge technology, Panasonic air conditioners ensure a comfortable environment, no matter the temperature outside.",
      description1:
        "Featuring advanced inverter technology, Panasonic’s AC units adjust cooling capacity in real-time, helping to conserve energy and reduce electricity bills.",
      description2:
        "Their units are also equipped with air-purifying filters that help improve indoor air quality, making them an ideal choice for individuals with respiratory issues.",
      description3:
        "Panasonic’s air conditioners are designed to meet all cooling needs, whether for a small room or large space.",
      description4:
        "Their products offer long-term reliability, ease of maintenance, and are backed by exceptional customer support.",
      description5:
        "Panasonic focuses on sustainability, making them a popular choice for eco-conscious consumers.",
    },
    {
      name: "samsung",
      label: "Samsung",
      description:
        "Samsung’s air conditioners are designed to provide top-tier cooling while maximizing energy savings. With a strong focus on innovation and comfort, Samsung offers a variety of air conditioners suitable for both residential and commercial spaces.",
      description1:
        "Samsung AC units come with inverter technology, which adjusts cooling capacity based on room temperature, resulting in less power consumption.",
      description2:
        "They also feature multi-layer air purification systems that filter out dust, allergens, and other particles, improving air quality.",
      description3:
        "Built with durability in mind, Samsung’s air conditioners are engineered to last.",
      description4:
        "Their sleek, modern designs fit seamlessly into any decor, offering both performance and style.",
      description5:
        "Samsung’s commitment to sustainability and efficiency makes them an excellent choice for eco-conscious customers.",
    },
    {
      name: "carrier",
      label: "Carrier",
      description:
        "Carrier is a pioneer in the air conditioning industry, offering a wide range of energy-efficient products known for their reliability and durability. Carrier’s air conditioners are perfect for individuals and businesses looking for efficient and cost-effective cooling solutions.",
      description1:
        "With their advanced inverter technology, Carrier AC units provide consistent and efficient cooling without excessive power consumption.",
      description2:
        "They are designed to operate quietly, ensuring that they do not disrupt the environment while maintaining optimal comfort levels.",
      description3:
        "Carrier’s AC units come with a variety of features such as air purification systems, dehumidification, and easy-to-use controls.",
      description4:
        "These systems are designed for both residential and commercial use, offering flexibility and advanced comfort solutions.",
      description5:
        "Carrier’s products are trusted for their long-term reliability and high energy efficiency.",
    },
  ];

  const product = products.find((p) => p.name === name) || {
    label: "Product not found",
    description: "Sorry, this product doesn't exist.",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
  };
  return (
    <>
      <div className="h-[30vh] bg-azureblue relative mb-4">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <h1 className="font-olive">{product.label}</h1>
        </div>
      </div>

      <div className="max-w-5xl mb-4 mx-auto flex flex-col font-poppins font-bold space-y-5">
        <p>{product.description}</p>
        {product.description1 && <p>{product.description1}</p>}
        {product.description2 && <p>{product.description2}</p>}
        {product.description3 && <p>{product.description3}</p>}
        {product.description4 && <p>{product.description4}</p>}
        {product.description5 && <p>{product.description5}</p>}
      </div>
    </>
  );
}
