import Layout from '../components/Layout';
import Link from 'next/link';

const Blog = () => {

    const PostLink = ({ slug, title }) => (
        <li>
            <Link as = {`/${slug}`} href = {`/posts?title=${title}`} >
                         <a> {title} </a>
            </Link>  
        </li>
    )
    return (
        <Layout title = "My Cool Blog">
            <ul>
                <PostLink slug = "react-post" title = "React Post" />
                <PostLink slug = "angular-post" title = "Angular Post" />
                <PostLink slug = "vue-post" title = "Vue Post" />
            </ul>
        </Layout>
    );
};

export default Blog;