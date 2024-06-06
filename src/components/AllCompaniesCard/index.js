import React from "react";
import "./styles.css";
import hire from "../../assets/hire.png";

const companies = [
  {
    name: "Tech Mahindra",
    description:
      "It is a large tech corporation headquartered in India that specializes in technologies and enterprise operation outsourcing. Corporate Business Strategies, Data Insights, Data security, and other fields of expertise are among the solutions they provide, which span from strategy development...",
  },
  {
    name: "Infosys",
    description:
      "Infosys becomes an Indian international organization that offers financial, insurance, factory production, and some other industries with consultancy services, technology, application development, administration, as well as external testing solutions.Finacle, a general backup system with many components for individual and commercial banking, becomes one of Infosys's most well-known inventions. This organization was started in July 1981, throughout Pune by seven individuals, and is HQs situated in Bengaluru and Karnataka.",
  },
  {
    name: "TATA Consultancy Services",
    description:
      "TCS seems to be an Indian worldwide technical and consultancy firm that also offers software solutions. TCS was established by Jamsetji Tata, and the new CEO is Rajesh Gopinathan. Its headquarters are located in Mumbai, Maharashtra. It has become the 1st IT Software Company in Gurgaon and 2nd biggest Indian firm and a component of the Tata Family with 149 sites in 46 nations.",
  },
  {
    name: "Collabera",
    description:
      "Collabera is just an American firm that offers expert infotech hiring, staff, consultancy, as well as corporate solutions to customers all around the globe. Hiten Patel is the present CEO of the company, which is based in Basking Ridge, New Jersey, USA. It is well-known across the globe for giving employment opportunities in the Information Technology area and for delivering excellent staff benefits.",
  },
  {
    name: "Hindustan Computers Limited",
    description:
      "Wipro has become a corporation that everyone wants to work with. Western India Palm Refined Oil Limited (WIPRO) offers infotech, advising, and corporate function outsourcing solutions, as well as manufacturing and selling items such as medical tools and soaps. M.H. Hasham Premji started the company in December 1945. Its HQs are in the Indian city of Bengaluru and Karnataka. In addition, WIPRO is 3rd largest enterprise in India.",
  },
  {
    name: "Microsoft",
    description:
      "Microsoft Corp., situated in Redmond, Washington, is just an American global tech business. It creates, produces, licenses, maintains, and distributes desktop software, retail gadgets, and PCs, as well as associated services. Bill Gates and Paul Allen seem to be the founding members of Microsoft, which was formed in April 1975 in New Mexico, USA. Every engineer's desire is to work for this organization.",
  },
  {
    name: "Google",
    description:
      "Google LLC is a global tech firm based in the United States that specializes in Network services/goods such as digital ad systems, a web browser, cloud-based services, applications, and equipment. It is regarded as among the Big Five tech giants in the United States' IT sector. On Sept 4th, 1998, Google was established. It is undoubtedly a corporation that many people aspire to work for!",
  },
  {
    name: "Thoughtworks",
    description:
      "Thoughtworks is just a software developer and distribution firm that also offers consulting solutions. It was formed in 1993. The organization is strongly affiliated with the rapid application development concept and it has given to a variety of open-source projects. The organization has 43 branches spread over 14 different countries. Thoughtworks company situated in Chicago, Illinois, and was founded by Neville Roy Singham.",
  },
  {
    name: "International Business Machines",
    description:
      "IBM becomes a worldwide technology firm that offers equipment, software, cloud platforms, and cognitive technologies. IBM was initially known as Computing Tabulating Recording Company, and it was created in 1911 after Charles Ranlett Flint merged 4 enterprises in NY State. Arvind Krishna is the CEO of the company, which is based in Armonk, New York.",
  },
  {
    name: "National Institute of Information Technology",
    description:
      "The NIIT has become a worldwide leader in Information Technology services, helping its customers to change at the intersection of unique domain skills and innovative technology to produce genuine business results. Vijay K Thadani and Rajendra Singh established the business in 1992, with its headquarters in Delhi. Sudhir Singh is the present CEO of the company.",
  },
  {
    name: "Nagarro",
    description:
      "Nagarro seems to be a privately held firm that was created in 1996. Nagarro uses a future innovation, flexible, and compassionate approach to helping alter, adjust, and establish innovative paths for the long term. According to Manas Fuloria, Chief Executing Officer, the company excels in virtual product design and delivers on the goal of innovative breakthroughs.",
  },
];

const AllCompaniesCard = () => {
  return (
    <div className="companines-wrapper">
      <div className="flex-wrapper">
        <div className="left-wrapper">
          <h1 className="title">
            List of Software Companies in Gurgaon
          </h1>
          <h2 className="companines-name">Cognizant</h2>
          <p className="companines-desc">
            <p>
              Cognizant seems to be a global firm based in the United States
              that specializes in IT solutions such as digital, tech,
              consultancy, and operations. Cognizant Technology Solutions
              Corporation seems to be a NASDAQ-100 company that operates using
              the name Cognizant Technology Solutions Corporation.
              <p>
                On Jan 26, 1994, Francisco D'Souza and Kumar Mahadeva launched
                the company. Cognizant HQs are in the state of New Jersey in the
                United States.
              </p>
            </p>
          </p>
        </div>
        <img src={hire} alt="Hire" className="image" />
      </div>
      <div className="companines-data">
        {companies.map((company, index) => (
          <div key={index}>
            <h2 className="companines-name">{company.name}</h2>
            <p className="companines-desc">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCompaniesCard;
