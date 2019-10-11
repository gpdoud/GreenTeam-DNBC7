$().ready(() => {
    $("#display").click(() => {
        getVendor();
        });
    
    });
    
    const refresh = (vendor) => {
        $("#pid").text(vendor.id);
        $("#pcode").text(vendor.code);
        $("#paddress").text(vendor.address);
        $("#pcsz").text(vendor.city + " " + vendor.state + " " + vendor.zip);
        $("#pphone").text(vendor.phone);
        $("#pemail").text(vendor.email)
    }
    
    const getVendor = () => {
        let id = $("#id").val();
        VendorService.get(id)
            .done( (res) => {
                console.log("Vendor:", res);
                refresh(res);
            });
    };