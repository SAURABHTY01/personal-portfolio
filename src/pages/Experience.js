import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function Experience() {
  return (
    <section className="section exp-section" id="experience">
      <h1>Experience</h1>
      <div
        className="timeline"
        style={{
          width: "1100px",
          height: "600px",
          overflowY: "auto",
          margin: "0 auto",
        }}
      >
        <VerticalTimeline
          layout="1-column"
          lineColor={"white"}
          className="custom-timeline"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="05/2023 – Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Expinator Web Technologies Pvt Ltd
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MERN STACK DEVELOPER
            </h4>
            <h4 className="vertical-timeline-element-location">
              Mohali, Punjab
            </h4>
            <div className="vertical-timeline-element-projects">
              <h4>Project : Butter Mobile App</h4>
              <p>
                • Developed rest api in backend with Geo-location in MongoDB and
                Node JS
              </p>
              <p>• Developed admin dashboard for app in React JS</p>
              <h4>Project : Apparel Mockup Generation App</h4>
              <p>• Developed mockup generation using React JS and Fabric JS</p>
              <h4>Project : Biograin Nutritonal App</h4>
              <p>
                • Setup server and create restful api using Node JS and Express
                JS
              </p>
              <p>• Integrate all functionality and api in frontend</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="02/2023 – 05/2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Dipole Tech Innovations OPC Pvt Ltd
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SOFTWARE ENGINEER
            </h4>
            <h4 className="vertical-timeline-element-location">
              Mohali, Punjab
            </h4>
            <div className="vertical-timeline-element-projects">
              <h4>Project : HiHelloHr</h4>
              <p>• Developed various reminder scheduler cron jobs in Node JS</p>
              <h4>Project : Electron Auto Updater</h4>
              <p>• Develop electron app and integrate auto updater in app</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="05/2021 – 11/2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Cetpa Infotech Pvt Ltd
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MERN STACK DEVELOPER
            </h4>
            <h4 className="vertical-timeline-element-location">
              Noida, Uttar Pradesh
            </h4>
            <div className="vertical-timeline-element-projects">
              <p>
                • Design components for various projects in React JS <br/>• Design
                database structure in MongoDB <br/>• Setup server and create restful
                api using Node JS and Express JS <br/>• Integrate all restful api in
                frontend
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
