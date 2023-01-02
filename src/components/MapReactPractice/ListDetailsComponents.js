import "../../App.css";

import ListLayout from "./ListLayout";

const staticList = [
  {
    id: "01",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fokcredit.in%2Fblog%2Fhow-to-start-tour-and-travel-business%2F&psig=AOvVaw25UX9ThN5nFAXO9o5OJA9p&ust=1672746578432000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjthd_oqPwCFQAAAAAdAAAAABAE",
    altName:"alt img One",
    heading: "Heading One",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
  {
    id: "02",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fokcredit.in%2Fblog%2Fhow-to-start-tour-and-travel-business%2F&psig=AOvVaw25UX9ThN5nFAXO9o5OJA9p&ust=1672746578432000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjthd_oqPwCFQAAAAAdAAAAABAE",
    altName:"alt img two",
    heading: "Heading two",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
  {
    id: "03",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fokcredit.in%2Fblog%2Fhow-to-start-tour-and-travel-business%2F&psig=AOvVaw25UX9ThN5nFAXO9o5OJA9p&ust=1672746578432000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjthd_oqPwCFQAAAAAdAAAAABAE",
    altName:"alt img Three",
    heading: "Heading Three",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
  {
    id: "04",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fokcredit.in%2Fblog%2Fhow-to-start-tour-and-travel-business%2F&psig=AOvVaw25UX9ThN5nFAXO9o5OJA9p&ust=1672746578432000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjthd_oqPwCFQAAAAAdAAAAABAE",
    altName:"alt img Four",
    heading: "Heading Four",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
];

function ListDetails(){

    function renderList(data){
        const {id, img, altName, heading, discription}=data
        return(
            <ListLayout
            key={id}
            img={img}
            altName={altName}
            heading={heading}
            discription={discription}
            />
        )
    }

    return(
        <ul>
            {
                staticList.map(renderList)
            }
        </ul>
    )
}

export default ListDetails;