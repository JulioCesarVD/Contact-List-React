

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			editContact: false,
			selectedContact: {},
		},
		actions: {
			fetchPostAgenda: () => { //create agenda
				fetch('https://playground.4geeks.com/contact/agendas/JulioCesarVD', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			},
			fetchPostContact: (name, phone, email, address) => {
				const newContact = {
					name,
					phone,
					email,
					address,
				}
				fetch('https://playground.4geeks.com/contact/agendas/JulioCesarVD/contacts', {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			},
			fetchGetContact: () => { 
				fetch('https://playground.4geeks.com/contact/agendas/JulioCesarVD/contacts', {
					method: "GET",
				})
					.then(response => response.json())
					.then(data => {
						console.log(data) 
						const store = getStore(); 
						setStore({ contacts: data.contacts });
					})
					.catch(error => console.log(error))
			},
			fetchDeleteContact: (id) => { 
				const deleteContact = {
					slug: "JulioCesarVD",
					contact_id: id
				}
				fetch(`https://playground.4geeks.com/contact/agendas/JulioCesarVD/contacts/${id}`, {
					method: "DELETE",
					body: JSON.stringify(deleteContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log(response);
						if (response.ok) {
							getActions().fetchGetContact();
						};
					})

					.catch(error => console.log(error))
			},
			fetchUpdateContact: (name, phone, email, address) => {
				const updateContact = {
					name,
					phone,
					email,
					address,
				}
				fetch(`https://playground.4geeks.com/contact/agendas/JulioCesarVD/contacts/${getStore().contactId}`, {
					method: "PUT",
					body: JSON.stringify(updateContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						getActions().fetchGetContact();
					})
					.catch(error => console.log(error))
			},
			handleEditContact: (value, id) => {
				setStore({ editContact: value, contactId: id })
			},
			selectedContact: (name, phone, email, address) => {
				setStore({ selectedContact: { name: name, phone: phone, email: email, address: address } })

			},
			
		}
	};
}

export default getState;
