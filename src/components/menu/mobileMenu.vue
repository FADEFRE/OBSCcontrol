<script setup>
import menuItem from './menuItem.vue';
const name = "twocamsgrid"
const name1 = "fourcamsgrid"
const name2 = "singleplayer"
const name3 = "autoswitcher"
</script>


<template>
    <div class="mobileMenuWrap">
        <router-link to="singleplayer" class="mobileMenuItem" active-class="mobileMenuIconWrapActiv">
            <div class="mobileMenuIconWrap">
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="18" rx="2.06186" fill="currentColor"/>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#AAFF00"/>
            </svg>
        </router-link>
        <router-link to="twocamsgrid" class="mobileMenuItem" active-class="mobileMenuIconWrapActiv">
            <div class="mobileMenuIconWrap">
                <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.31812 0.636353C0.765831 0.636353 0.318115 1.08407 0.318115 1.63635V8.36363C0.318115 8.91591 0.765831 9.36363 1.31812 9.36363H14.8333C15.3856 9.36363 15.8333 8.91591 15.8333 8.36362V1.63635C15.8333 1.08407 15.3856 0.636353 14.8333 0.636353H1.31812ZM17.8333 0.636353C17.281 0.636353 16.8333 1.08407 16.8333 1.63635V8.36363C16.8333 8.91591 17.281 9.36363 17.8333 9.36363H31.3484C31.9007 9.36363 32.3484 8.91591 32.3484 8.36362V1.63635C32.3484 1.08407 31.9007 0.636353 31.3484 0.636353H17.8333Z" fill="currentColor"/>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#AAFF00"/>
            </svg>
        </router-link>
        <router-link to="fourcamsgrid" class="mobileMenuItem" active-class="mobileMenuIconWrapActiv">
            <div class="mobileMenuIconWrap">
                <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65161 0.772705C1.09933 0.772705 0.651611 1.22042 0.651611 1.77271V8.49998C0.651611 9.05226 1.09933 9.49998 1.65161 9.49998H15.1668C15.719 9.49998 16.1668 9.05226 16.1668 8.49998V1.77271C16.1668 1.22042 15.719 0.772705 15.1668 0.772705H1.65161ZM18.1668 0.772705C17.6145 0.772705 17.1668 1.22042 17.1668 1.77271V8.49998C17.1668 9.05226 17.6145 9.49998 18.1668 9.49998H31.6819C32.2342 9.49998 32.6819 9.05226 32.6819 8.49998V1.77271C32.6819 1.22042 32.2342 0.772705 31.6819 0.772705H18.1668ZM0.651611 11.5C0.651611 10.9477 1.09933 10.5 1.65161 10.5H15.1668C15.719 10.5 16.1668 10.9477 16.1668 11.5V18.2273C16.1668 18.7795 15.719 19.2273 15.1668 19.2273H1.65161C1.09933 19.2273 0.651611 18.7795 0.651611 18.2273V11.5ZM18.1668 10.5C17.6145 10.5 17.1668 10.9477 17.1668 11.5V18.2273C17.1668 18.7795 17.6145 19.2273 18.1668 19.2273H31.6819C32.2342 19.2273 32.6819 18.7795 32.6819 18.2273V11.5C32.6819 10.9477 32.2342 10.5 31.6819 10.5H18.1668Z" fill="currentColor"/>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#aaff00"/>
            </svg>
        </router-link>
        <router-link to="autoswitcher" class="mobileMenuItem" active-class="mobileMenuIconWrapActiv">
            <div class="mobileMenuIconWrap">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-2.0703e-05 17C-2.0703e-05 17.416 0.143979 17.776 0.431979 18.08C0.719979 18.384 1.07998 18.528 1.51198 18.512H2.99998C4.02398 18.512 4.99998 18.312 5.92798 17.912C6.85598 17.512 7.64798 16.976 8.30398 16.304C8.95998 15.632 9.49598 14.832 9.91198 13.904C10.328 12.976 10.528 12.008 10.512 11C10.512 9.768 10.944 8.712 11.808 7.832C12.672 6.952 13.736 6.512 15 6.512H18V8C18 8.336 18.096 8.62401 18.288 8.86401C18.48 9.10401 18.696 9.28 18.936 9.392C19.176 9.504 19.456 9.536 19.776 9.488C20.096 9.44 20.36 9.304 20.568 9.08L23.568 6.08C23.872 5.76 24.016 5.4 24 5C23.984 4.6 23.84 4.248 23.568 3.944L20.568 0.944004C20.328 0.720004 20.056 0.584004 19.752 0.536004C19.448 0.488004 19.168 0.520004 18.912 0.632004C18.656 0.744004 18.44 0.920004 18.264 1.16C18.088 1.4 18 1.68 18 2V3.512H15C13.992 3.512 13.024 3.712 12.096 4.112C11.168 4.512 10.368 5.04 9.69598 5.696C9.02398 6.352 8.48798 7.152 8.08798 8.096C7.68798 9.04 7.49598 10.008 7.51198 11C7.51198 12.248 7.07198 13.312 6.19198 14.192C5.31198 15.072 4.24798 15.512 2.99998 15.512H1.51198C1.09598 15.512 0.735979 15.656 0.431979 15.944C0.127979 16.232 -0.0160207 16.584 -2.0703e-05 17ZM-2.0703e-05 5.024C-2.0703e-05 5.44 0.143979 5.792 0.431979 6.08C0.719979 6.368 1.07998 6.512 1.51198 6.512H2.99998C3.70398 6.512 4.35198 6.664 4.94398 6.968C5.53598 7.272 6.05598 7.688 6.50398 8.216C6.83998 7.192 7.33598 6.272 7.99198 5.456C6.53598 4.16 4.87198 3.512 2.99998 3.512H1.51198C1.09598 3.512 0.735979 3.664 0.431979 3.968C0.127979 4.272 -0.0160207 4.624 -2.0703e-05 5.024ZM10.032 16.592C11.456 17.872 13.112 18.512 15 18.512H18V20.024C18 20.344 18.096 20.632 18.288 20.888C18.48 21.144 18.696 21.32 18.936 21.416C19.176 21.512 19.456 21.536 19.776 21.488C20.096 21.44 20.36 21.304 20.568 21.08L23.568 18.08C23.872 17.776 24.016 17.416 24 17C23.984 16.584 23.84 16.24 23.568 15.968L20.568 12.968C20.328 12.728 20.056 12.584 19.752 12.536C19.448 12.488 19.168 12.52 18.912 12.632C18.656 12.744 18.44 12.928 18.264 13.184C18.088 13.44 18 13.72 18 14.024V15.512H15C14.312 15.512 13.664 15.368 13.056 15.08C12.448 14.792 11.936 14.376 11.52 13.832C11.168 14.856 10.672 15.776 10.032 16.592Z" fill="currentColor"/>
                </svg>  
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#AAFF00"/>
            </svg>
        </router-link>
    </div>
</template>

<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;

.mobileMenuWrap{
    position: fixed;
    bottom: 0;
    display: flex;
    padding: 0.5rem 2rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
    background: #121212;
    display: none;
    z-index: 100;

}

.mobileMenuItem{
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #F5F5F5;
}

.mobileMenuIconWrap{
    display: flex;
    height: 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    align-self: stretch;
}

.mobileMenuIconWrapActiv{
    color: #aaff00;
}

.mobileMenuIcon{
    width: 2rem;
    height: 1.125rem;
    flex-shrink: 0;
    border-radius: 0.12888rem;
    background: #F5F5F5;
}

// Mobile
@media only screen and (max-width: 600px) {
    .mobileMenuWrap{
        display: flex;
    
    }
}
</style>