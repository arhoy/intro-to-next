import Layout from "../components/Layout";
import axios from 'axios';
import Error from "./_error";
import { Component } from "react";

class About extends Component {
  static async getInitialProps() {
      try {
        const res = await axios.get("https://api.github.com/users/arhoy");   
        return { user: res.data };
      } catch (error) {
        return { user: false }
      }
  }

  render() {
    const { user } = this.props;
    if(!user) {
        return <Error statusCode = {404} />
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
    );
  }
}

export default About;