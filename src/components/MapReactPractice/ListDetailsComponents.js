import "../../App.css";

import ListLayout from "./listLayout";

const staticList = [
  {
    id: "01",
    imgURL:"img.png",
    altName:"alt img One",
    heading: "Heading 1",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
  {
    id: "02",
    imgURL:"https://cdn.pixabay.com/photo/2022/01/03/01/00/ruins-6911495_960_720.jpg",
    altName:"alt img two",
    heading: "Heading two",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
  {
    id: "03",
    imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fkoinoniatravels.com%2F&psig=AOvVaw1FnujmhOnB_ZMg7wzHBoFX&ust=1672754754825000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiShZqHqfwCFQAAAAAdAAAAABAE",
    altName:"alt img Three",
    heading: "Heading Three",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
  {
    id: "04",
    imgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fokcredit.in%2Fblog%2Fhow-to-start-tour-and-travel-business%2F&psig=AOvVaw25UX9ThN5nFAXO9o5OJA9p&ust=1672746578432000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjthd_oqPwCFQAAAAAdAAAAABAE",
    altName:"alt img Four",
    heading: "Heading Four",
    discription:
      "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business, they will read it. They will comment on it.",
  },
];

function ListDetails(){

    function renderList(data){
        const {id, imgURL, altName, heading, discription}=data
        return(
            <ListLayout
            key={id}
            imgURL={imgURL}
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