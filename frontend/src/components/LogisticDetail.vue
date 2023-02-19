<template>

<div style="padding: 30px 20px 0">
    <div class="row">
        <div class="col-2">
            <select class="form-control form-select">
                <option value="">Logistic Instruction</option>
            </select>
        </div>
        <div class="col-10 text-start">
            <button type="button" style="background-color: #e7e7e7; border-radius: 30px; width: 180px;" class="btn btn-square-md text-secondary">Draft</button>
        </div>
    </div>

    <div class="row text-secondary mt-4">
        <div class="col-2">
            <!-- Empty -->
        </div>
        <div class="col-8 text-start">
            <div class="row">
                <div class="col-3">
                    <div>Assigned Vendor</div>
                    <div>
                        <select class="form-control form-select text-secondary">
                            <option value="">Amarit & Associates Logistics Co Ltd</option>
                        </select>
                    </div>
                </div>
                <div class="col-3">
                    <div>Attention Of</div>
                    <div>
                        <input required type="text" class="form-control" placeholder="John Smith" />
                    </div>
                </div>
                <div class="col-3">
                    <div>Quation No.</div>
                    <div>
                        <input required type="text" class="form-control" placeholder="ABC-123-01" />
                    </div>
                </div>
                <div class="col-3">
                    <div>Invoice To</div>
                    <div>
                        <select class="form-control form-select text-secondary">
                            <option value="">MITO</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <div>
                    Vendor Address
                </div>
                <div>
                    <input required type="text" class="form-control" placeholder="Description" />
                </div>
            </div>
        </div>

        <div class="col-2">
            <div class="text-start">
                <div>
                    Customer - Contract
                </div> 
                <select class="form-control form-select text-secondary">
                    <option value="">ADNOC-ONSHORE</option>
                </select>
            </div>
            
            <div class="mt-4 text-start">
                <div>
                    Customer PO No.
                </div> 
                <select class="form-control form-select text-secondary">
                    <option value="">A123XXHTA0192</option>
                </select>
            </div>
        </div>
    </div>
</div>

</template>