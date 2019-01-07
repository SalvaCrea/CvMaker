import serviceMedia from 'src/services/media';

export default {
    methods: {
        getMedia(slug) {
            return serviceMedia.getMedia(slug);
        }
    }
};