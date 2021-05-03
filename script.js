// create the "base" class Device 
class Device 
{
    constructor(status, replacementCost, supplierName, serialNum)
    {
        this._status = status; 
        this._replacementCost = replacementCost;
        this._supplierName = supplierName;
        this._serialNum = serialNum;
    }
    get status()
    {
        return this._status; 
    }
    get replacementCost()
    {
        return this._replacementCost; 
    }
    get supplierName()
    {
        return this._supplierName; 
    }
    get serialNum()
    {
        return this._serialNum; 
    }
    enable()
    {
        this._status = 1;
    }
    disable()
    {
        this._status = 0;
    }
    set replacementCost(newReplacementCost)
    {
        this._replacementCost = newReplacementCost;
    }
    set supplierName(newSupplierName)
    {
        this._supplierName = newSupplierName;
    }
    set serialNum(newSerialNum)
    {
        this._serialNum = newSerialNum;
    }

}

//create the sub-class "Video Device" that extends Device
class VideoDevice extends Device 
{
    constructor(status, replacementCost, supplierName, serialNum, resolution, type)
    {
        super(status, replacementCost, supplierName, serialNum);
        this._resolution = resolution; 
        this._type = type; 
    }
    get resolution()
    {
        return this._resolution;
    }
    set resolution(newResolution)
    {
        this._resolution = newResolution;
    }
    get type()
    {
        return this._type;
    }
    set type(newType)
    {
        this._type = newType;
    }

}
//create the sub-class "Disk Device" that extends Device
class DiskDevice extends Device 
{
    constructor(status, replacementCost, supplierName, serialNum, size, transferRate)
    {
        super(status, replacementCost, supplierName, serialNum);
        this._size = size; 
        this._transferRate = transferRate; 
    }
    get size()
    {
        return this._size;
    }
    set size(newSize)
    {
        this._size = newSize;
    }
    get transferRate()
    {
        return this._transferRate;
    }
    set transferRate(newTransferRate)
    {
        this._transferRate = newTransferRate;
    }

}
//create the sub-class "Hard Disk" that extends Disk Device
class HardDisk extends DiskDevice
{
    constructor(status, replacementCost, supplierName, serialNum, size, transferRate, platterSize, numOfPlatters)
    {
        super(status, replacementCost, supplierName, serialNum,size, transferRate);
        this._platterSize = platterSize; 
        this._numOfPlatters = numOfPlatters; 
    }
    get platterSize()
    {
        return this._platterSize;
    }
    set platterSize(newPlatterSize)
    {
        this._platterSize = newPlatterSize;
    }
    get numOfPlatters()
    {
        return this._numOfPlatters;
    }
    set numOfPlatters(newNumOfPlatters)
    {
        this._numOfPlatters = newNumOfPlatters;
    }

}
//create the sub-class "SSD" that extends Disk Device
class SSD extends DiskDevice
{
    constructor(status, replacementCost, supplierName, serialNum, size, transferRate, type, wear)
    {
        super(status, replacementCost, supplierName, serialNum, size, transferRate);
        this._type = type; 
        this._wear = wear; 
    }
    get type()
    {
        return this._type;
    }
    set type(newType)
    {
        this._type = newType;
    }
    get wear()
    {
        return this._wear;
    }
    set wear(newWear)
    {
        this._wear = newWear;
    }

}
//Block scope to set up the video device properties 
{
    //keep track of the object index values when stored in the array
    //and when the user filters through the next and prev buttons 
    let objNum = 0;
    
    //create array to store the objects
    let objArr = [];
    
    //create three new objects and add them to the array 
    objArr.push(new VideoDevice(1,45.59,"Sony","4AR34", "3840 x 2164", "LCD"));
    objArr.push(new VideoDevice(0,32.42,"Samsung", "2F342S", "1570 x 1231" , "LED"));
    objArr.push(new VideoDevice(0,1000.00,"Apple", "434FE2", "1570 x 1231" , "Plasma"));

    //retrieves data and displays to the necessary textboxes
    function retrieveVidData()
    {
        $gel("objNumVid").innerHTML = objNum + 1;

        if(objArr[objNum].status === 1)
        {
            $gel("statusVid").checked = true; 
        }
        else
        {
            $gel("statusVid").checked = false; 
        }
        $gel("replaceCostVid").value = objArr[objNum].replacementCost;
        $gel("supplierNameVid").value = objArr[objNum].supplierName;
        $gel("serialNumVid").value =  objArr[objNum].serialNum;
        $gel("resVid").value = objArr[objNum].resolution; 
        $gel("typeVid").value = objArr[objNum].type; 
    }
    //iterates through the array forward when the user clicks the next button 
    function nextVidObj()
    {
        objNum++;
        if(objNum > objArr.length-1)
        {
            objNum = 0;
        }
        retrieveVidData();
    }
    //iterates through the array backwards when the user clicks the previous button 
    function previousVidObj()
    {
        objNum--;
        if (objNum < 0 ) 
        {
            objNum = objArr.length-1;
        }
        retrieveVidData();
    }
    
    //if the user makes anychanges, keeps the updated changes by replacing the existing values in object properties
    function updateVidObj()
    {
        if($gel("statusVid").checked === false)
        {
            objArr[objNum].disable();
        }
        else 
        {
            objArr[objNum].enable();
        }
        objArr[objNum].replacementCost = $gel("replaceCostVid").value;
        objArr[objNum].supplierName = $gel("supplierNameVid").value;
        objArr[objNum].serialNum = $gel("serialNumVid").value;
        objArr[objNum].resolution = $gel("resVid").value;
        objArr[objNum].type = $gel("typeVid").value;
    }
    
    //craetes a new object when user clicks new button (values are set to blank or 0)
    function createNewVidObj()
    {

        objNum = objArr.length;
        objArr[objArr.length] = new VideoDevice(0,0, " ", " ", " ", " ");
        retrieveVidData();
    }
}
//Block scope to set up the hard disk properties 
{
    //keep track of the object index values when stored in the array
    //and when the user filters through the next and prev buttons 
    let objNum = 0; 
    
    //create array to store the objects
    let objArr = [];
    
    //create two new objects and add them to the array 
    objArr.push(new HardDisk(1,234.53,"Sony","4AR34","4TB","7GB/second", "2.5 Inches",15)); 
    objArr.push(new HardDisk(0,234.53,"Samsung","434E","2TB","5GB/second", "3.0 Inches",12)); 

    //retrieves data and displays to the necessary textboxes
    function retrieveHardDiskData()
    {

        $gel("objNumHD").innerHTML = objNum + 1;
        if(objArr[objNum].status === 1)
        {
            $gel("statusHD").checked = true; 
        }
        else
        {
            $gel("statusHD").checked = false; 
        }
        $gel("replaceCostHD").value = objArr[objNum].replacementCost;
        $gel("supplierNameHD").value = objArr[objNum].supplierName;
        $gel("serialNumHD").value =  objArr[objNum].serialNum;
        $gel("sizeHD").value = objArr[objNum].size; 
        $gel("transRateHD").value = objArr[objNum].transferRate; 
        $gel("platterSizeHD").value = objArr[objNum].platterSize; 
        $gel("numOfPlattersHD").value = objArr[objNum].numOfPlatters; 
    }
    
    //iterates through the array forward when the user clicks the next button 
    function nextHDObj()
    {
        objNum++;
        if(objNum > objArr.length-1)
        {
            objNum = 0;
        }
        retrieveHardDiskData();
    }
    
    //iterates through the array backwards when the user clicks the previous button 
    function previousHDObj()
    {
        objNum--;
        if (objNum < 0 ) 
        {
            objNum = objArr.length-1;
        }
        retrieveHardDiskData();
    }
    
    //if the user makes anychanges, keeps the updated changes by replacing the existing values in object properties
    function updateHDObj()
    {
        if($gel("statusHD").checked === false)
        {
            objArr[objNum].disable();
        }
        else 
        {
            objArr[objNum].enable();
        }
        objArr[objNum].replacementCost = $gel("replaceCostHD").value;
        objArr[objNum].supplierName = $gel("supplierNameHD").value;
        objArr[objNum].serialNum = $gel("serialNumHD").value;
        objArr[objNum].size = $gel("sizeHD").value;
        objArr[objNum].transferRate = $gel("transRateHD").value;
        objArr[objNum].platterSize = $gel("platterSizeHD").value;
        objArr[objNum].numOfPlatters = $gel("numOfPlattersHD").value; 
    }
    
    //creates a new object when user clicks new button (values are set to blank or 0)
    function createNewHDObj()
    {

        objNum = objArr.length;
        objArr[objArr.length] = new HardDisk(0,0, " ", " ", " ", " ", " ", 0);
        retrieveHardDiskData();
    }
}

//Block scope to set up the SSD properties 
{
    //keep track of the object index values when stored in the array
    //and when the user filters through the next and prev buttons 
    let objNum = 0; 
    
    //create array to store the objects
    let objArr = [];
    
    //create two new objects and add them to the array 
   objArr.push(new SSD(1,343.43, "Apple","34F32","1TB","10GB/second", "Flash",true)); 
   objArr.push(new SSD(0,432.53,"Samsung","43EA","2TB","8GB/second", "DRAM",false)); 

    //retrieves data and displays to the necessary textboxes
    function retrieveSSDData()
    {
        $gel("objNumSSD").innerHTML = objNum + 1;
        if(objArr[objNum].status === 1)
        {
            $gel("statusSSD").checked = true; 
        }
        else
        {
            $gel("statusSSD").checked = false; 
        }
        $gel("replaceCostSSD").value = objArr[objNum].replacementCost;
        $gel("supplierNameSSD").value = objArr[objNum].supplierName;
        $gel("serialNumSSD").value =  objArr[objNum].serialNum;
        $gel("sizeSSD").value = objArr[objNum].size; 
        $gel("transRateSSD").value = objArr[objNum].transferRate; 
        $gel("typeSSD").value = objArr[objNum].type; 
        if(objArr[objNum].wear === true)
        {
            $gel("wearLevSSD").checked = true; 
        }
        else
        {
            $gel("wearLevSSD").checked = false; 
        }
    }
    
    //iterates through the array forward when the user clicks the next button 
    function nextSSDObj()
    {
        objNum++;
        if(objNum > objArr.length-1)
        {
            objNum = 0;
        }
        retrieveSSDData();
    }
    
    //iterates through the array backwards when the user clicks the previous button 
    function previousSSDObj()
    {
        objNum--;
        if (objNum < 0 ) 
        {
            objNum = objArr.length-1;
        }
        retrieveSSDData();
    }
    //if the user makes anychanges, keeps the updated changes by replacing the existing values in object properties
    function updateSSDObj()
    {
        if($gel("statusSSD").checked === false)
        {
            objArr[objNum].disable();
        }
        else 
        {
            objArr[objNum].enable();
        }
        objArr[objNum].replacementCost = $gel("replaceCostSSD").value;
        objArr[objNum].supplierName = $gel("supplierNameSSD").value;
        objArr[objNum].serialNum = $gel("serialNumSSD").value;
        objArr[objNum].size = $gel("sizeSSD").value;
        objArr[objNum].transferRate = $gel("transRateSSD").value;
        objArr[objNum].type = $gel("typeSSD").value;                    
        if($gel("wearLevSSD").checked === false)
        {
            objArr[objNum].wear = false;
        }
        else 
        {
            objArr[objNum].wear = true;
        }
    }
    //creates a new object when user clicks new button (values are set to blank or 0)
    function createNewSSDObj()
    {
        objNum = objArr.length;
        objArr[objArr.length] = new SSD(0,0, " ", " ", " ", " ", "DRAM", true);
        retrieveSSDData();
    }
}

//short-hand form version to reduce typing 
function $gel(id) 
{
    return document.getElementById(id);
}

