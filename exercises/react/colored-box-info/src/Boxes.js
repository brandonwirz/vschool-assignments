import React from "react"
import Box from "./Box"



function Boxes() {

      const boxes = [{
            title:"title 1",
            subtitle:" subtitle",
            info:"information1",
            backgroundColor:"rgb(219, 209, 226)",
          },
          // {
          //   title:"title 2",
          //   subtitle:" subtitle 2",
          //   info:"information 2",
          //   backgroundColor:"rgb(176, 147, 196)",
          // },
          // {
          //   title:"title 3",
          //   subtitle:" subtitle3",
          //   info:"information 3",
          //   backgroundColor:"rgb(125, 154, 131)",
          // },
          // {
          //   title:"title 2",
          //   subtitle:" subtitle 2",
          //   info:"information 2",
          //   backgroundColor:"rgb(176, 147, 196)",
          // },
          // {
          //   title:"title 3",
          //   subtitle:" subtitle3",
          //   info:"information 3",
          //   backgroundColor:"rgb(125, 154, 131)",
          // },
          // {
          //   title:"title 2",
          //   subtitle:" subtitle 2",
          //   info:"information 2",
          //   backgroundColor:"rgb(176, 147, 196)",
          // },
          // {
          //   title:"title 3",
          //   subtitle:" subtitle3",
          //   info:"information 3",
          //   backgroundColor:"rgb(125, 154, 131)",
          // },
        ]

          const boxesJSX1 = boxes.map((box)=>{
              return <Box
                  title = {box.title}
                  subTitle={box.subTitle}
                  backgroundColor={box.backgroundColor}
                  info={box.info}
                />

          })
          return(
              <div>{boxesJSX1}</div>
          )
        }
  // return (
    // <div>
    //
    //     <Box title={boxes[0}.title} subTitle="" info="" description="Text goes here" backgroundColor="rgb(212, 196, 219)"/>
    //     <Box title="" subTitle="" info="{boxes[0].info}" description="Text goes here" backgroundColor="rgb(183, 205, 172)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(232, 225, 180)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(226, 142, 121)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(214, 155, 211)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(121, 199, 209)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(218, 165, 227)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(192, 217, 156)"/>
    //     <Box title="" subTitle="" info="" description="Text goes here" backgroundColor="rgb(160, 219, 186)"/>
    //
    // </div>
//   )
// }


export default Boxes;
