var customersList =[
	{id:1,name:'Vivek', email:'vivek@abc.com', phone:'8989389333',address:"Singapore"},
	{id:2,name:'Dev', email:'dev@abc.com', phone:'866u389333',address:"India"},
	{id:3,name:'Ameer', email:'ameer@abc.com', phone:'877779333',address:"Asia"},
	{id:4, name:'Dian', email:'dian@gmail.com', phone:"1234567876", address:'Singapore'},
	{id:5, name:'Apple', email:'dian@gmail.com', phone:"1234567876", address:'Singapore'},
	{id:6, name:'Orange', email:'dian@gmail.com', phone:"1234567876", address:'Singapore'}
];

const getCustomers = function(){
	return customersList;
}

const getCustomerById = function(id){
	var customer = {};
	for (var i = 0; i < customersList.length; i++) {
		if(customersList[i].id == id){
			return customersList[i];
		}
	}
	return customer;
}

const addCustomer= (customer)=>{
    customer.id=Math.floor(Math.random()*1000000)
    customersList.push(customer)
    return {result:'success',msg:"customer added ok"};
	//assignment
}


const updateCustomer = function(customer){
	for(var i=0;i<customersList.length;i++){
		if(customersList[i].id == customer.id){
			customersList[i] = customer;
			break;
		}
	}
	return {result:'success',msg:"customer updated ok"};
	//assignment
}

const deleteCustomer = (id)=>{
	var tempList = [];
	for(var i=0;i<customersList.length;i++){
		if(customersList[i].id != id){
			tempList.push(customersList[i])
		}
	}
	customersList = tempList;
	return {result:'success',msg:"customer deleted ok"};
	//assignment
}
 

module.exports = {getCustomers, getCustomerById,addCustomer,updateCustomer,deleteCustomer};