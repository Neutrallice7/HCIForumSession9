const Validity = (Donor, Recipient) => {
    if (Donor === `O-`) {
        return true;
    }
    else if (Donor === `A+` && (Recipient === `A+` || Recipient === `AB+`)) {
        return true;
    }
    else if (Donor === `A-` && (Recipient === `A-` || Recipient === `A+` || Recipient === `AB+` || Recipient === `AB-`)) {
        return true;
    }
    else if (Donor === `B+` && (Recipient === `B+` || Recipient === `AB+`)) {
        return true;
    }
    else if (Donor === `B-` && (Recipient === `B-` || Recipient === `B+` || Recipient === `AB+` || Recipient === `AB-`)) {
        return true;
    }
    else if (Donor === `AB+` && Recipient === `AB+`) {
        return true;
    }
    else if (Donor === `AB-` && (Recipient === `AB+` || Recipient === `AB-`)) {
        return true;
    }
    else if (Donor === `O+` && (Recipient === `O+` || Recipient === `A+` || Recipient === `B+` || Recipient === `AB+`)) {
        return true;
    }
    else {
        return false;
    }

    
}

console.log(`${Validity('O+', 'A+')}`);
console.log(`${Validity('A-', 'B-')}`);
console.log(`${Validity('A-', 'AB+')}`);