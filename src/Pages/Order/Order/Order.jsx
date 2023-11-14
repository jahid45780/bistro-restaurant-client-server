import { useState } from 'react';
import oderCover from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
// import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTeb from './OrderTab/OrderTeb';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categoris = ['salad', 'pizza','dessert', 'soup', 'drinks']
    const { category } = useParams()
    const initialIndex = categoris.indexOf(category) 
    const [tabIndex, setTabIndex]= useState(initialIndex)
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks= menu.filter(item => item.category === 'drinks')
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | order food </title>
             
      </Helmet>
            <Cover img={oderCover} title="Order Food" ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
               <div className=' text-center text-xl  mt-4' >
               <TabList>
                    <Tab> Salad </Tab>
                    <Tab>pizza</Tab>
                    <Tab> soups </Tab>
                    <Tab> desserts </Tab>
                    <Tab> drinks </Tab>
                </TabList>
               </div>

                <TabPanel>
                <OrderTeb items={salad} ></OrderTeb>
                </TabPanel>
                <TabPanel>
                    <OrderTeb items={pizza} ></OrderTeb>
                </TabPanel>
                <TabPanel>
                    <OrderTeb
                       items={drinks}
                    ></OrderTeb>
                </TabPanel>
                <TabPanel>
                    <OrderTeb items={soup} ></OrderTeb>
                </TabPanel>
                <TabPanel>
                    <OrderTeb items={dessert} ></OrderTeb>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;