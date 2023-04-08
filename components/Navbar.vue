
<template>
    <div class="card relative ">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="40"
                    class="sm:mr-3 lg:mr-6 " />
            </template>
            <template #end>

                <Button icon="pi pi-bell" class="mr-2 mb-1" plain text size="large" rounded aria-label="Notification" />
                <AvatarMenu />

            </template>
        </Menubar>
    </div>
</template>

<script setup lang="ts">

const items = ref([
    {
        label: 'Dashoard',

    },
    {
        label: 'Properties',
    },
    {
        label: 'Contacts',
    },
    {
        label: 'Listing',
    },
    {
        label: 'Clients',
    },
    {
        label: 'Reports',
    },
    {
        label: 'Settings',
    }
]);
</script>