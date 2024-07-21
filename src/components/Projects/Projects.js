import React ,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Form from 'react-bootstrap/Form';
import "./style.css";
import Preloader from  "../Pre";
import axios from 'axios';
function Projects() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [Message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleUpload = async (event) => {

    event.preventDefault();
    setLoading(true);
    if (!file) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      if(!isChecked){
      const response = await axios.post('http://46.250.234.244:5002/whisper', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response!=null) {
      setMessage(response.data.transcription);
      }
    }
    else{
      const response = await axios.post('http://46.250.234.244:5002/phw', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response!=null) {
      setMessage(response.data.transcription);
      }
    }
    } catch (error) {
      setMessage(`File upload failed: ${error.response ? error.response.data.message : error.message}`);
    }
    setLoading(false);
  };

  return (
    <Container fluid className="project-section">
      <Preloader load={loading} />
      <Container>
        <h1 className="project-heading">
          SUMM <strong className="purple">AI  </strong> Project - Llama-3 Hackthon ⭐
        </h1>
        <p style={{ color: "white" }}>
        In an era where technology is rapidly advancing, efficiently summarizing video content is becoming increasingly essential. This topic focuses on applying the advanced language model, Llama 3, to accomplish this task. With its superior natural language processing capabilities, Llama 3 promises to deliver concise, accurate, and easily understandable summaries for viewers.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
          <div class="mb-3">
            <input class="form-control" 
            onChange={handleFileChange}
            type="file" id="formFile"/>            
          </div>
          <div className="form-check1">
          <input class="form-check-input"  onChange={handleCheckboxChange} type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Viet Nam
          </label>
          </div>
        </Row>

       
        <div class="d-grid gap-2 col-6 mx-auto">
          <button onClick={handleUpload} class="btn btn-primary" type="button">Upload</button>
        </div>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row> */}
      </Container>
      <Particle />
      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px", background:"#fff", marginTop:'20px',height:'1000px'}}>
          <label style={{ textAlign: "left",paddingTop:"10px"}}>{Message}</label>
      </Row>
      
      </Container>

    </Container>
  );
}

export default Projects;
