var TransformUtils = Class.create();
TransformUtils.prototype = {
    initialize: function() {
    },

    normalizeText: function(value) {
        if (gs.nil(value)) {
            return '';
        }

        return (value + '').replace(/\s+/g, ' ').trim();
    },

    toUpperSnakeCase: function(value) {
        var normalized = this.normalizeText(value)
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .replace(/\s+/g, '_');

        return normalized.toUpperCase();
    },

    coalesce: function(value, fallback) {
        if (gs.nil(value) || (value + '').trim() === '') {
            return gs.nil(fallback) ? '' : fallback + '';
        }

        return value + '';
    },

    type: 'TransformUtils'
};
