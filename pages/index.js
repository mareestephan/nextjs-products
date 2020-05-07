import Layout from './components/layout'
import Fetch from 'isomorphic-unfetch'
// import Products from './components/products'
import Categories from './components/categories'
import Link from 'next/link'



const Index = (props) => (
  <Layout>
    <div>

      <Categories categories={props.data} />

    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://my-json-server.typicode.com/mareestephan/api-json/pages_to_create');
  const data = await res.json();

  return {
    data
  }

}

export default Index