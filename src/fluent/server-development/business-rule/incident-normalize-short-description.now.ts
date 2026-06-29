import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: 'incident_normalize_short_description_br',
    table: 'incident',
    name: 'Incident Normalize Short Description',
    description: 'Normalizes incident short descriptions before insert and update operations.',
    action: ['insert', 'update'],
    when: 'before',
    order: 100,
    active: true,
    script: Now.include('./incident-normalize-short-description.server.js'),
    protectionPolicy: 'read',
})
