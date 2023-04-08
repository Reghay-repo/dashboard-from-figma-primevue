
import Navbar from '../components/Navbar.vue';

<template>
    <!-- navbar -->
    <Navbar />
    <!-- <img src="@/assets/avatar.jpg" alt=""> -->
    <!-- card info section  -->
    <CardInfoSection />
    <div class="grid mt-2">
        <div class="lg:col-8 md:col-12">
            <Card style="border-radius: 1.2rem;">
                <template #content>
                    <RecentInqueriesTable name="Recent Inquery"/>
                </template>
            </Card>
        </div>
        <div class="lg:col-4 md:col-12">
            <Card style="border-radius: 1.2rem;">
                <template #title>
                    Booking Status
                </template>
                <template #content>
                    <p>
                        <BarChart />
                    </p>
                </template>
            </Card>
        </div>
    </div>
    <div class="grid mt-2">

        <div class="lg:col-4 md:col-12">
            <Card style="border-radius: 1.2rem;">
                <template #title>
                    Revenue Statistics
                </template>
                <template #content>
                    <p>
                        <BasicChart />
                    </p>
                </template>
            </Card>
        </div>
        <div class="lg:col-8 md:col-12">
            <Card style="border-radius: 1.2rem;">
                <template #content>
                    <RecentInqueriesTable name="Project Sales"/>
                </template>
            </Card>
        </div>
    </div>
</template>

<style >
body {
    background-color: #F7F7F7;
}
</style>