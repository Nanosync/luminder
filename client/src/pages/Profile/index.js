import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ProfileDetailCard from "../../components/ProfileDetailCard";
import ProfileImageCard from "../../components/ProfileImageCard";
import AddPhoto from "../../components/AddPhoto";
import { AuthUserContext } from "../../components/Session";
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
  age: 0,

  error: null,
  fetchedData: false,
  shownData: false
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
      const user = this.context;
      const uid = user.uid;
    
      API.get(`users/${uid}`)
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
            age: response.data.age,
            shownData: true
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
      return (<div></div>);
    }

    if (!this.state.shownData) {
      return (
        <div>Loading...</div>
      );
    }

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
                src={this.state.photos[0]}
                width="150px"
                height="150px"
                roundedCircle
                style={{ objectFit: "cover" }}
              />
              <div className="ml-4 align-self-center">
                <p>Name: {this.state.name}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Age: {this.state.age}</p>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <h1>Photo Booth</h1>
              <ProfileImageCard photos={this.state.photos} />
              <AddPhoto />
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
