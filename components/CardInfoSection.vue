<template>
    <div class="grid grid-nogutter justify-content-between  mt-5 ">
        <Card style="border-radius: .9rem;" v-for="i in 4"
            class="col-12 md:col-6 lg:col-3 lg:w-28rem my-2 sm:w-full  ">
            <template #title>
                <div class="flex justify-content-between ">
                    <div class="mt-2 ml-2">
                        <i class="pi pi-briefcase" style="color:#3141A3;font-size: 1.8rem;">
                        </i>
                        <span style="font-size: 1.5rem;font-weight: 300;">
                            On Going
                        </span>
                    </div>
                    <div class="">
                        <Button icon="pi pi-ellipsis-v" severity="danger" text rounded aria-label="Cancel" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="grid">
                    <div class="col">
                        <h2>435</h2>
                        <h4 style="font-weight: 400; font-size: 1.2rem;">On going projects</h4>
                    </div>
                    <div class="col">
                        <h4 style="font-weight: 500;">124 Completed</h4>
                        <ProgressCard />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>