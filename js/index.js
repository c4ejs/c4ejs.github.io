
const appUI = {
    insert_2nd_list : function () {
        let val = document.getElementById('inlineFormCustomSelect').value;
    },
}

document.getElementById('inlineFormCustomSelect').addEventListener('change', appUI.insert_2nd_list)