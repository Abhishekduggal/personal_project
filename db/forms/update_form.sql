UPDATE forms_pp SET
    machinetype = $2,
    shift = $3, 
    shopordernumber = $4, 
    productid = $5, 
    workstation = $6, 
    temp = $7, 
    productspeed = $8, 
    hrid = $9, 
    productdensity = $10, 
    rejects = $11, 
    waterpressure = $12, 
    drylevel = $13, 
    issuelog = $14, 
    machineoperating = $15, 
    comments = $16, 
    issuecategory = $17, 
    issueresolution = $18, 
    packagingissue = $19, 
    training = $20, 
    trainingcategory = $21,
    imgurl = $22
    WHERE formid = $1;
SELECT *
FROM forms_pp;