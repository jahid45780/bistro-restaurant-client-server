import {Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../../../../bistro-restaurant-client/src/assets/menu/banner3.jpg'
import imgD from '../../assets/menu/dessert-bg.jpeg'
import imgP from '../../assets/menu/pizza-bg.jpg'
import imgS from '../../assets/menu/soup-bg.jpg'
import imgSalad from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const OurMenu = () => {

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered= menu.filter(item => item.category === 'offered')

    return (
        <div>
                <Helmet>
        <title>Bistro Boss | Menu</title>
             
      </Helmet>
  <Cover img={img} title="our menu" ></Cover>
  {/* main cover */}
   <SectionTitle
        subHeading='Don`t Miss'     
        heading='Today`s Offer'
   ></SectionTitle>
   {/* offer menu item */}
<MenuCategory
items={offered}

></MenuCategory>
{/* dessert */}
<MenuCategory
  items={dessert}
  title='dessert'
  img={imgD}
></MenuCategory>
{/* pizza */}

<MenuCategory
     items={pizza}
     title={"pizza"}
     img={imgP}
></MenuCategory>
{/* soup */}
<MenuCategory
   items={soup}
   title={"soup"}
   img={imgS}
></MenuCategory>
{/* salad */}
<MenuCategory
  items={salad}
  title={'salad'}
  img={imgSalad}
></MenuCategory>

        </div>
    );
};

export default OurMenu;