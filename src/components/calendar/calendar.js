import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import faLocale from '@fullcalendar/core/locales/fa';
import { Layout, Row, Col,Modal, Form} from 'antd';
import './calendar.css';


const options = [
	{label: "Tehran"},
	{label: "my Tehran for sale"},
	{label: "Tehran Tehran"},
	{label: "Tehran 1500"},
	{label: "Los Angles Tehran"},
	{label: "Tehran has no more pomegranates"},
	{label: "our man in Tehran"},
	{label: "Tehran city of love"},
	{label: "one night in Tehran"},
	{label: "Tehrans night"}
  ];
const { Header, Content, Footer } = Layout;

const calendar = () => {
	const [isModalVisible, setIsModalVisible]="" ;
	const [events, setEvents] ="";
	const [eventTitle, setEventTitle]="";
	const [currentDate, setCurrentDate]="" ;

	const showModal = (arg) => {
		setCurrentDate(arg.dateStr);
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setEvents([...events, { title: eventTitle, date: currentDate}]);
		setIsModalVisible(false);
		setEventTitle('');
		setCurrentDate('');
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<Layout>
			<Header>
				<Row>
					<Col span={4}>
						<h1 className="brand">سینما</h1>
					</Col>
				</Row>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<div>
					<FullCalendar
						plugins={[dayGridPlugin, interactionPlugin]}
						initialView="dayGridMonth"
						locale={faLocale}
						dateClick={(arg) => showModal(arg)}
						events={events}
					/>
				</div>
			</Content>
			<Modal
				title="add movie scheduale"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
			  <Form>
			  <select>
            {options.map((option) => (
              <option>{option.label}</option>
            ))}
          </select>
			  </Form>
			   
               
			</Modal>

		</Layout>
	);
};
export default calendar;


