import * as React from 'react';
import * as Library from '../../abstract-library';

export default class DialogMethod extends React.Component {
    topicDescriptionAndTaskDialogMethod(value) {
        Library.DialogAndroid.alert(
            `${value.name} by ${value.author.last}`,
            `
                <h5>Description</h5>
                    <span>
                        ${value.description}
                    </span>
                <h5>Task</h5>
                    ${value.task.map((task) => {
                return (` ${task}`)
            })}
            `,
            {
                contentIsHtml: true
            }
        );
    }
}