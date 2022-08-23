import React from "react";
import { useParams } from "react-router-dom";
import { Card, Descriptions, Divider, List, Button } from "antd";
import dishes from "../../assets/data/dishes.json";

function DetailedOrder() {
	const { id } = useParams();
	console.log(id);
	return (
		<Card title={`Order ${id}`} style={{ margin: 20 }}>
			<Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
				<Descriptions.Item label='Customer'>Gideon Odiok</Descriptions.Item>
				<Descriptions.Item label='Customer Address'>
					Address 10-20, City, Country
				</Descriptions.Item>
			</Descriptions>
			<Divider />
			<List
				dataSource={dishes}
				renderItem={(dishItem) => (
					<List.Item>
						<div style={{ fontWeight: "bold" }}>
							{dishItem.name} x {dishItem.quantity}
						</div>
						<div>${dishItem.price}</div>
					</List.Item>
				)}
			/>
			<Divider />
			<div style={styles.totalSumContainer}>
				<h2>Total:</h2>
				<h2 style={styles.totalPrice}>$42.96</h2>
			</div>
			<Divider />
			<div style={styles.buttonsContainer}>
				<Button block type='danger' size='large' style={styles.button}>
					Decline Order
				</Button>
				<Button block type='primary' size='large' style={styles.button}>
					Accept Order
				</Button>
			</div>
			<Button block type='primary' size='large'>
				Food Is Done
			</Button>
		</Card>
	);
}

const styles = {
	totalSumContainer: {
		flexDirection: "row",
		display: "flex",
	},
	totalPrice: {
		marginLeft: "auto",
		fontWeight: "bold",
	},
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		gap: "40px",
		paddingBottom: 30,
	},
	button: {
		marginLeft: 20,
		marginRight: 20,
	},
};

export default DetailedOrder;
