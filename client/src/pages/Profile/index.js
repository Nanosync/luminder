import React, { useContext, Component } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ProfileDetailCard from "../../components/ProfileDetailCard";
import ProfileImageCard from "../../components/ProfileImageCard";
import { AuthUserContext } from "../../components/Session";
import axios from "axios";
import API from "../../api";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  gender: "",
  bio: "",
  photos: [],
  modules: [],
  chats: [],
  matches: [],
  likes: [],
  dislikes: [],
  profilePhoto: "",

  error: null,
  fetchedData: false,
};

class Profile extends Component {
  static contextType = AuthUserContext;

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  fetchData() {
    if (!this.state.fetchedData) {
      this.setState({ fetchedData: true });
      // const uid = user.uid; //TODO
      const uid = "5ff8304358db651406d5281f";
      const query = "users/" + uid;
      API.get(query)
        .then((response) => {
          this.setState({
            name: response.data.name,
            gender: response.data.gender,
            bio: response.data.bio,
            photos: response.data.photos,
            modules: response.data.modules,
            chats: response.data.chats,
            matches: response.data.matches,
            likes: response.data.likes,
            dislikes: response.data.dislikes,
            profilePhoto: response.data.profilePhoto,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentDidMount() {
    const user = this.context;
    
    if (user) {
      this.fetchData();
    }
  }

  componentDidUpdate() {
    if (this.context) {
      this.fetchData();
    }
  }

  // TODO

  render() {
    if (!this.context) {
      return <div></div>;
    } else {}

    return (
      <Container className="flex-grow-1">
        <Row>
          <Col>
            <h1>Profile</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex">
              <Image
                src={UserPhoto1}
                width="150px"
                height="150px"
                roundedCircle
                style={{ objectFit: "cover" }}
              />
              <div className="ml-4 align-self-center">
                <p>Name: {this.state.name}</p>
                <p>Gender: {this.state.gender}</p>
                {console.log(this.state.name)}
              </div>
            </div>
            <div className="mt-4 mb-4">
              <h1>Photo Booth</h1>
              <ProfileImageCard />
            </div>
          </Col>
          <Col>
            <ProfileDetailCard header="Bio" text={this.state.bio} />
            <ProfileDetailCard
              className="mt-4"
              header="Academic Plan"
              text={this.state.modules.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            />
            <div className="text-right mt-4">
              <Link to="/edit">
                <Button className="ml-2" variant="success">
                  Edit Profile
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
