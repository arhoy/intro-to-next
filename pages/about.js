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
        <p>
          This is my first site using NextJs. Server side rendering for React Apps. 
        </p>
        <p>The benefits of using server side rendering is SEO, since React apps have horrible SEO since Google bots cannot crawl them and often just see a blank page</p>

        <p>This site is available at <a href="https://github.com/arhoy/intro-to-next">github.com/arhoy/intro-to-next</a> </p>

        <p>  To create this site, import all the packages in the package.json file and the scripts.</p>
        <p> To deploy the site, add a now.json and in the root directory in vs code simply enter 'now' </p>
        <p>Make sure the commit the changes to your git repo.</p>
      </Layout>
    );
  }
}

export default About;