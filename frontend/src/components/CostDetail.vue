<template>
    <h5 style="color:DarkTurquoise; text-align: left; padding: 20px;">
        <div class="d-inline">Cost Detail</div>
        <div class="d-inline ms-3"><font-awesome-icon icon="fa-solid fa-chevron-down" /></div>
    </h5>

    <table class="table">
        <thead style="background-color: #ECEFF1" class="text-secondary">
            <tr>
                <th>Description</th>
                <th width="5%">Qty</th>
                <th>UOM</th>
                <th>Unit Price</th>
                <th>Discount(%)</th>
                <th>VAT(%)</th>
                <th></th>
                <th>Currency</th>
                <th>VAT Amount</th>
                <th>Sub Total</th>
                <th>Total</th>
                <th width="10%">Charge To</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input required type="text" class="form-control" placeholder="Description" />
                </td>
                <td>
                    <input required type="number" class="form-control" placeholder="Qty" />
                </td>
                <td>
                    <select class="form-control form-select">
                        <option v-for="order in orders.data.uom" :key="order.id" value="order">{{ order }}</option>
                    </select>
                </td>
                <td><input required type="number" class="form-control" placeholder="Unit Price" /></td>
                <td><input required type="number" class="form-control" placeholder="0" /></td>
                <td><input required type="number" class="form-control" placeholder="0" /></td>
                <td class="align-middle" style="font-size: 24px; color:#bbb;">
                    <font-awesome-icon icon="fa-solid fa-right-long" />
                </td>
                <td>
                    <select class="form-control form-select">
                        <option v-for="order in orders.data.currency" :key="order.id" value="order">{{ order }}</option>
                    </select>
                </td>
                <td><input required type="number" class="form-control" placeholder="0" /></td>
                <td><input required type="number" class="form-control" placeholder="0" /></td>
                <td><input required type="number" class="form-control" placeholder="0" /></td>
                <td>
                    <select class="form-control form-select">
                        <option v-for="order in orders.data.charge_to" :key="order.id" value="order">{{ order }}</option>
                    </select>
                </td>
                <td>
                    <button type="button" style="background-color: #e7e7e7" class="btn btn-square-md"><strong style="color:#aaa"><i class="fa-solid fa-minus"></i></strong></button>
                </td>
            </tr>
            
            <tr class="align-middle">
                <td rowspan="0" style="text-align: start;">
                    Exchange Rate 1 USD =
                </td>
                <td rowspan="0" style="text-align: start;" colspan="6">
                    3.6725 AED
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    AED in Total
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    0.00
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    0.00
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    0.00
                </td>
                <td rowspan="0" colspan="2" style="text-align: end;">
                    <button type="button" style="background-color: DarkTurquoise" class="btn btn-square-md"><strong class="text-white"><i class="fa-solid fa-plus"></i></strong></button>
                </td>
            </tr>

            <tr class="align-middle">
                <td style="background-color: #ECEFF1; border-color:white;">
                    AED in Total
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    0.00
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    0.00
                </td>
                <td style="background-color: #ECEFF1; border-color:white;">
                    0.00
                </td>
            </tr>
        </tbody>
    </table>        
</template>

<script>
export default {
    props: ['orders'],
}

</script>