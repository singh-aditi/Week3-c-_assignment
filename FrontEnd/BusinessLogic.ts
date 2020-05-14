export class fetchFunc
{  
    async fetch1()
    {
        let response = await fetch("http://localhost:3000/BussinessLogic");
        let data= await response.json();
        console.log(data);
        return data;
    }
    async fetchRole()
    {
        let response = await fetch("http://localhost:3000/RoleData");
        let data= await response.json();
        console.log(data);
        return data;
    }
    async fetchCustomer()
    {
        let response = await fetch("http://localhost:3000/CustomerData");
        let data= await response.json();
        console.log(data);
        return data;
    }
}
