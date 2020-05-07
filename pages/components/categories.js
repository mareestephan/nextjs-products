import Link from 'next/link';


class Categories extends React.Component {


    render() {

        // const data = (this.props.categories);
        const listItems = this.props.categories.map((category) =>

            <div key={category.category_id} >
                <ul>
                    <li>
                        <Link href='/components/clp/[category] ' as={'/components' + category.slug} >
                            <a>
                                <h5>{category.meta_title}
                                </h5>
                            </a>
                        </Link >
                    </li>
                </ul>
            </div >

        );

        return (

            <div>
                {listItems}
            </div>

        );

    }

}

export default Categories;
