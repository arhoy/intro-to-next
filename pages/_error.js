import Layout from '../components/Layout';

const _error = ({statusCode}) => {
    return (
        <Layout title = "Error">
            {
                !statusCode ?
                <div> Page was not found</div> :  
                <div>There was a {statusCode} error </div>
            }
        </Layout>
    );
};

export default _error;