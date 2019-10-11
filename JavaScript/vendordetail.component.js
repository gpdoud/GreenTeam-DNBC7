let urlParms = {};
$().ready(() => {
    let urlParms = Utilities.parseUrlParameters(document.URL);
    $(".heading").css("fontWeight", "bold");
    
    
    const getVendor = () => {
       
        VendorService.get(urlParms.id)
            .done( (res) => {
                console.log("Vendor:", res);
                refresh(res);
            });
    };
    getVendor(urlParms.id);

});
    
    const refresh = (vendor) => {
        $("#pid").text(vendor.id);
        $("#pcode").text(vendor.code);
        $("#paddress").text(vendor.address);
        $("#pcsz").text(vendor.city + " " + vendor.state + " " + vendor.zip);
        $("#pphone").text(vendor.phone);
        $("#pemail").text(vendor.email)
    }
    
   