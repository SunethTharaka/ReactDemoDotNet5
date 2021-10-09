using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Detials
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Hander : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;

            public Hander(DataContext context)
            {
                _context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}