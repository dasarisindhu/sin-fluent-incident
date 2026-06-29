import { CatalogItem, SingleLineTextVariable, MultiLineTextVariable } from '@servicenow/sdk/core'
import { incidentCommonVariableSet } from './incident-common-variable-set.now'

CatalogItem({
    $id: 'incident_quick_help_catalog_item',
    name: 'Incident Quick Help',
    shortDescription: 'Request quick help for an incident',
    description: 'Simple catalog item created using ServiceNow Fluent SDK.',
    executionPlan: '523da512c611228900811a37c97c2014',
    state: 'published',
    availability: 'both',
    active: true,
    variableSets: [{ variableSet: incidentCommonVariableSet, order: 100 }],
    variables: {
        short_summary: SingleLineTextVariable({
            question: 'Short Summary',
            mandatory: true,
            order: 100,
        }),
        details: MultiLineTextVariable({
            question: 'Issue Details',
            mandatory: true,
            order: 200,
        }),
    },
})
