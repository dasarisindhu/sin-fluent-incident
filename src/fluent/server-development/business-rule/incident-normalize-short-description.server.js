(function executeRule(current, previous) {
    var transformUtils = new TransformUtils();
    var normalized = transformUtils.normalizeText(current.short_description + '');

    current.short_description = transformUtils.coalesce(normalized, 'General incident update');
})(current, previous);
