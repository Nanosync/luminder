import React, { useContext, Component } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ProfileDetailCard from "../../components/ProfileDetailCard";
import ProfileImageCard from "../../components/ProfileImageCard";
import { AuthUserContext } from "../../components/Session";
import axios from "axios";
import API from "../../api";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
};

class Profile extends Component {
  static contextType = AuthUserContext;

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    const user = this.context;

    if (!user) {
      // this.props.history.push("/login");
    } else {
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

  onSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      gender: this.state.gender,
      bio: this.state.bio,
      photos: this.state.photos,
      modules: this.state.modules,
      chats: this.state.chats,
      matches: this.state.matches,
      likes: this.state.likes,
      dislikes: this.state.dislikes,
      profilePhoto: this.state.profilePhoto
    }

    // const uid = user.uid; //TODO

    const uid = "5ff8304358db651406d5281f";
    const query = "users/update/" + uid;

    API.post(query, user)
      .then(res => console.log(res.data));
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={this.onChange}
                    value={this.state.name}
                    name="name"
                  />
                  <label>Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Gender"
                    onChange={this.onChange}
                    value={this.state.gender}
                    name="gender"
                  />
                  {console.log(this.state.name)}
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h1>Photo Booth</h1>
                <ProfileImageCard />
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Header className="text-center font-weight-bold text-uppercase">
                  BIO
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Bio"
                      onChange={this.onChange}
                      value={this.state.bio}
                      name="bio"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header className="text-center font-weight-bold text-uppercase">
                  ACADEMIC PLAN
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Academic Plan"
                      onChange={this.onChange}
                      value={this.state.modules.toString()}
                      name="modules"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <div className="text-right mt-4">
                <Link to={"/profile"}>
                  <Button variant="danger">Discard Changes</Button>
                </Link>

                <Button className="ml-2" variant="success" type="submit">
                  Apply Changes
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    );
  }
}

export default Profile;