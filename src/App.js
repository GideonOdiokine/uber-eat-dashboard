import Orders from "./modules/Orders";
import { Routes, Route } from "react-router-dom";
import DetailedOrder from "./modules/DetailedOrder";
import { Layout, Image } from "antd";
import SideMenu from "./components/SideMenu";
import RestaurantMenu from "./modules/RestaurantMenu";
import CreateMenuItem from "./modules/CreateMenuItem";
import OrderHistory from "./modules/OrderHistory";

const { Sider, Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<Sider style={{ height: "100vh", backgroundColor: "white" }}>
				<Image
					src='http://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg'
					preview={false}
				/>
				<SideMenu />
			</Sider>
			<Layout>
				<Content>
					<Routes>
						<Route path='/' element={<Orders />} />
						<Route path='order/:id' element={<DetailedOrder />} />
						<Route path='menu' element={<RestaurantMenu />} />
						<Route path='menu/create' element={<CreateMenuItem />} />
						<Route path='order-history' element={<OrderHistory />} />
					</Routes>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Uber Eats Restaurant @2022
				</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
