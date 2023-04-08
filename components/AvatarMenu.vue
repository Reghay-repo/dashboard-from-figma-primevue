
<template>
    <span>
        <Button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" plain text>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" class="mr-2" shape="circle" />
            <span>
                R.Robert
            </span>
            <i class="pi pi-arrow-down ml-2" style="font-size: 0.8rem"></i>
        </Button>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        <Toast />
    </span>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                url: 'https://vuejs.org/'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                to: '/fileupload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
</script>