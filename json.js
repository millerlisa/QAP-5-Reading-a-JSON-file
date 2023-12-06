// FETCH and READ the policies.json disk file  

fetch ('./policies.json')
    .then(response => response.json())
    .then(policies => {
        
        // Loop through the array in policies.json
        policies.forEach(policy => {
            
            console.log(`  Insurance Policy Summary:
             Policy Number: ${policy.policyNumber} 
                      Name: ${policy.firstName} ${policy.lastName}
                      Date: ${policy.policyDate} 
            Number of cars: ${policy.numberOfCars} 
                   Address: ${policy.address}, ${policy.city}.`);
        });
    })
    .catch(error => console.error(error));
